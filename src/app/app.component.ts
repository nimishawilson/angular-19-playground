import { Component, OnInit, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-19-playground';

  constructor() {
    // 5. Effects: Automatically respond to signal changes:
    // effect runs immediately when it’s created.
    // It runs again whenever one of its dependencies changes.
    // Effects are tied to Angular's lifecycle. When a component or service is destroyed, Angular automatically cleans up the effect to prevent memory leaks. 
    // Effects Eliminates the need for manual subscribe() and unsubscribe(). Effects are destroyed along with the component or service they belong to, preventing memory leaks.
    effect(() => {
      console.log('Count changed:', this.count());
    });
    // effect() can only be used within an injection context such as a constructor, a factory function, a field initializer,
    // or a function used with `runInInjectionContext`

    // 6. Reactive Templates: Signals automatically refresh templates when values change—no need for manual detectChanges() calls.
  }

  // 1. Creating signals
  count = signal(0); // Signal initialized with 0

  ngOnInit(): void {
    // 2. Reading Signal Values
    console.log(this.count()); // Get the current value

    // 3. Updating Signal Values
    this.count.set(5); // Set a new value
    this.count.update((value) => value + 1); // Update based on the current value
    // Using update allows us to access the current value of the signal ,
    // and set allows us to set a new value without caring about the current value

    // 4.Computed Signals: Signals that derive their values from other signals:
    const doubledCount = computed(() => this.count() * 2);
    console.log(doubledCount()); // Automatically updates when `count` changes
  }

  incrementOne() {
    // increment to see the effect runs when count is updated
    this.count.update((value) => value + 1);
  }

  invokeComputedSignalCalculation() {
    // 7. Computed Signals for Derived State. computed signals replace the need for manual recalculation.

    // Normal Multiplication - (Non Reactive)
    const base = 10;
    let multiplier = 2;
    let result = base * multiplier;
    console.log(result); // Outputs: 20

    // If you later update the value of base or multiplier, you need to manually recalculate result:

    multiplier = 3; // Update multiplier
    result = base * multiplier; // Manual recalculation
    console.log(result); // Outputs: 30

    // Reactive Computation with Signals

    // Define signals
    const baseWithSignal = signal(10);
    const multiplierWithSignal = signal(2);
    
    // Define a computed signal
    const resultWithSignal = computed(() => baseWithSignal() * multiplierWithSignal());
    
    // Access the computed value
    console.log(resultWithSignal()); // Outputs: 20
    
    // Update one of the dependencies
    multiplierWithSignal.set(3);
    
    // No manual recalculation required
    console.log(resultWithSignal()); // Outputs: 30 (automatically updated)
    
  }
}
